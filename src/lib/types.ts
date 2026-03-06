export interface Character {
  name: string;
}

export interface DialogueLine {
  character: Character;
  text: string;
  order: number;
}

export interface Script {
  title?: string;
  characters: Character[];
  lines: DialogueLine[];
}

export interface RehearsalSession {
  script: Script;
  playingAs: Character;
  currentLineIndex: number;
  responses: UserResponse[];
  status: "in_progress" | "completed";
}

export interface UserResponse {
  lineIndex: number;
  expected: string;
  actual: string;
  skipped: boolean;
  fidelity: number; // 0-1
}

export interface FidelityReport {
  overallScore: number; // 0-1
  responses: UserResponse[];
  totalLines: number;
  skippedLines: number;
}
