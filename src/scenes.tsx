const frames = [
  { src: "/flow-grazed.jpg?v=3", focus: "center 70%" },
  { src: "/flow-milked.jpg?v=3", focus: "center 62%" },
  { src: "/flow-collected.jpg?v=3", focus: "center 68%" },
  { src: "/flow-delivered.jpg?v=2", focus: "center 72%" },
]

export function JourneyFlow({ step }: { step: number }) {
  return (
    <div className="flow" style={{ transform: `translateX(-${step * 25}%)` }}>
      {frames.map((frame) => (
        <img
          key={frame.src}
          className="flow-panel"
          src={frame.src}
          alt=""
          style={{ objectPosition: frame.focus }}
        />
      ))}
    </div>
  )
}
