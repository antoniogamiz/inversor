export type ErrorDescriptor = {
  [key: string]: { [key: string]: string };
};

export type ValidationResult = {
  passes: string;
  errors: ErrorDescriptor[];
};
