import logo from './logo.svg';
import './App.css';
import MyChart from './Components/chart';

function App() {

  const data = [
    {
      "postId": "77742334",
      "title": "How to add support for my programming language on GitHub?",
      "score": 1,
      "answerCount": 1,
      "views": 1,
      "tags": [
        "github",
        "programming-languages",
        "github-linguist"
      ]
    },
    {
      "postId": "77700927",
      "title": "Auto-casting number literals in a type checker",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "type-conversion",
        "compiler-construction",
        "programming-languages",
        "typechecking"
      ]
    },
    {
      "postId": "77687364",
      "title": "How does a program store variables? [duplicate]",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "memory",
        "memory-management",
        "programming-languages"
      ]
    },
    {
      "postId": "77608146",
      "title": "Overloaded Subprograms in Ada",
      "score": 3,
      "answerCount": 0,
      "views": 3,
      "tags": [
        "programming-languages",
        "ada"
      ]
    },
    {
      "postId": "77562316",
      "title": "Java bytecode not in .class file",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "java",
        "jvm",
        "programming-languages",
        "bytecode-manipulation",
        "jvm-bytecode"
      ]
    },
    {
      "postId": "77239174",
      "title": "Estimating the Percentage of Changes in Programming and Natural Languages over a 10-Year Period",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "programming-languages",
        "language-evolution"
      ]
    },
    {
      "postId": "77233252",
      "title": "Which programming languages don't treat if as syntax?",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "syntax",
        "programming-languages",
        "language-design"
      ]
    },
    {
      "postId": "77028377",
      "title": "Can I compile the java code in something like a dll to use inside the Python code, and use this before in a pyinstaller compiled program? [duplicate]",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "python",
        "java",
        "dll",
        "compilation",
        "programming-languages"
      ]
    },
    {
      "postId": "76883645",
      "title": "How to implement mutual calling between different programming language by shared library?",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "java-native-interface",
        "shared-libraries",
        "programming-languages",
        "ffi"
      ]
    },
    {
      "postId": "76871548",
      "title": "How does the value of an untouched integer change here? [duplicate]",
      "score": 0,
      "answerCount": 1,
      "views": 0,
      "tags": [
        "python",
        "python-3.x",
        "list",
        "reference",
        "programming-languages"
      ]
    },
    {
      "postId": "76863507",
      "title": "How to make Intellij highlight and collapse code (in your own language)?",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "intellij-idea",
        "programming-languages"
      ]
    },
    {
      "postId": "76845313",
      "title": "SICP Environment Diagram with Mermaid.JS",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "programming-languages",
        "evaluation",
        "sicp",
        "mermaid"
      ]
    },
    {
      "postId": "76832398",
      "title": "How to add support for concurrency to a VM",
      "score": 0,
      "answerCount": 0,
      "views": 0,
      "tags": [
        "concurrency",
        "virtual-machine",
        "programming-languages"
      ]
    },
    {
      "postId": "76696952",
      "title": "How can I efficiently sort a large array of integers in ascending order?",
      "score": -4,
      "answerCount": 1,
      "views": -4,
      "tags": [
        "algorithm",
        "performance",
        "sorting",
        "programming-languages",
        "large-data"
      ]
    },
    {
      "postId": "76673987",
      "title": "Is this a reasonable way to construct the syntax node of an abstract syntax tree in C++ (or is there a safer or more memory-efficient construction)?",
      "score": 1,
      "answerCount": 0,
      "views": 1,
      "tags": [
        "c++",
        "parsing",
        "compiler-construction",
        "programming-languages",
        "abstract-syntax-tree"
      ]
    }
  ]


  return (
    <MyChart data={data} />
  );
}

export default App;
