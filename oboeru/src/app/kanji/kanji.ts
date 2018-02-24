export interface Kanji {
    character: string;
    meanings: string[];
    on: string[];
    kun: string[];
    strokes: number;
    examples: {text: string; answer: string; target: string; meaning: string;}[];
}