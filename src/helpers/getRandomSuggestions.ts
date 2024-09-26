import Suggestions from "../suggestions.json";

export const getRandomSuggestions = (): string[] => {
  const messages: string[] = Suggestions.messages;

  const shuffled = messages.sort(() => 0.5 - Math.random());
  const selectedMessages = shuffled.slice(0, 3);

  return selectedMessages;
};
