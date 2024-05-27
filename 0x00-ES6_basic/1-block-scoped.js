export default function taskBlock(trueOrFalse) {
    let task = false; // Change var to let
    let task2 = true; // Change var to let
  
    if (trueOrFalse) {
      const task = true; // No need to re-declare with let
      const task2 = false; // No need to re-declare with let
    }
  
    return [task, task2];
  }
  