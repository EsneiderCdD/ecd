import FileTable from "../common/FileTable";

function AboutTable() {
  const aboutFiles = [
    {
      icon: "📁",
      name: "Repositorio",
      date: "20/09/2025 9:06 p.m.",
      type: "Carpeta de archivos",
      size: "-",
    },
    {
      icon: "📁",
      name: "Sprint",
      date: "11/09/2025 12:47 a.m.",
      type: "Carpeta de archivos",
      size: "-",
    },
    {
      icon: "🖌️",
      name: "Adobe Illustrator 2024",
      date: "25/02/2025 6:53 p.m.",
      type: "Acceso directo",
      size: "3 KB",
    },
  ];

  return <FileTable files={aboutFiles} />;
}

export default AboutTable;
