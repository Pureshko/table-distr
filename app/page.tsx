import { Table } from "../components/table.jsx";

const teachers = [
  "Трофимова А. В. 102к","Цыздоева В. А. 106к","Жакупов М. Т. (Малеев Н.В.) 100к","Луценко Е. В. 110к","Кузнецова Н. А. 114к","Сапаркулова М. С. 119к","Жолдасбаева А. С. 117к","Кудашева М. И. 114/112к",
]
const startTime = 480
const period = 45
const numberOfLessons = 6

export default function Home() {

  return (
    <div>
      <Table
        teachers={teachers}
        startTime={startTime}
        numberOfLessons={numberOfLessons}
        period={period}
      />
    </div>
  );
}
