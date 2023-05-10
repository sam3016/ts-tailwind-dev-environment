type ScriptOption = 0 | 1 | 2 | 3 | 4 | 5;

interface Window {
  loadData: (string) => void;
  FileMaker: {
    PerformScriptWithOption: (
      script: string,
      param?: string,
      option?: ScriptOption
    ) => void;
  };
}

declare var window: Window;
