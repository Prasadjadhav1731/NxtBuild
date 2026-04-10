import { askGroq } from './groq.service.js';
import { getProjectById } from './project.service.js';
import { buildGenerationPrompt } from '../constants/prompts.js';
import { parseGenerationResponse } from '../utils/code.utils.js';

export const generateCode = async (projectId, userId, userPrompt) => {
  const project = await getProjectById(projectId, userId);

  const fullPrompt = buildGenerationPrompt(
    project.messages,
    project.generatedCode,
    userPrompt
  );

  // ✅ FIXED HERE
  const aiResponse = await askGroq(fullPrompt);

  const { description, code } = parseGenerationResponse(aiResponse);

  // Save user message
  project.messages.push({
    role: 'user',
    content: userPrompt,
    timestamp: new Date(),
  });

  // Save AI response
  project.messages.push({
    role: 'assistant',
    content: description || 'Here is your generated code.',
    timestamp: new Date(),
  });

  // Save previous version
  if (project.generatedCode && code) {
    project.versions.push({
      code: project.generatedCode,
      prompt: userPrompt,
      createdAt: new Date(),
    });
  }

  // Update generated code
  if (code) {
    project.generatedCode = code;
  }

  // Set title if first message
  if (project.title === 'Untitled Project' && project.messages.length <= 2) {
    project.title =
      userPrompt.length > 50
        ? userPrompt.substring(0, 50) + '...'
        : userPrompt;
  }

  project.updatedAt = new Date();
  await project.save();

  return {
    message: {
      role: 'assistant',
      content: description || 'Here is your generated code.',
      timestamp: new Date(),
    },
    generatedCode: project.generatedCode,
    versionIndex: project.versions.length,
  };
};