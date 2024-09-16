// memento-pattern.ts

class EditorState {
  constructor(public content: string) {}
}

class Editor {
  private state: EditorState;

  constructor() {
    this.state = new EditorState('');
  }

  setContent(content: string): void {
    this.state = new EditorState(content);
  }

  getState(): EditorState {
    return this.state;
  }

  restoreState(state: EditorState): void {
    this.state = state;
  }
}

class Caretaker {
  private mementos: EditorState[] = [];

  saveState(editor: Editor): void {
    this.mementos.push(editor.getState());
  }

  getMemento(index: number): EditorState {
    return this.mementos[index];
  }
}

// Usage
const editor = new Editor();
const caretaker = new Caretaker();

editor.setContent('Initial content');
caretaker.saveState(editor);

editor.setContent('Updated content');
caretaker.saveState(editor);

console.log(`Current state: ${editor.getState().content}`);

editor.restoreState(caretaker.getMemento(0));
console.log(`Restored state: ${editor.getState().content}`);
