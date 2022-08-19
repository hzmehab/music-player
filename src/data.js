import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "In Minutes",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-1024x1024.jpg",
      artist: "Shrimpnose",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41689",
      color: ["#687FA7", "#EAC7C4"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "After Hours",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/36fcc61f2d1c707e99f36706700d73229e2e8dff-1024x1024.jpg",
      artist: "Poldoore",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36942",
      color: ["#A11116", "#D9CBAF"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
