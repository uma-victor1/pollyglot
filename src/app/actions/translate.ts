"use server";

import { translate } from "../../../lib";

export const translateText = async (text: string, targetLanguage: string) => {
  return await translate(text, targetLanguage);
};
