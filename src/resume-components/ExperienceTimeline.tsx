interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  jobs: Job[];
}

export function ExperienceTimeline({ jobs }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6">
      {jobs.map((job, index) => (
        <div key={index} className="relative pl-6 border-l border-zinc-800">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
          <h4 className="font-semibold">{job.title}</h4>
          <p className="text-sm text-zinc-400 mb-2">{job.company} | {job.period}</p>
          <p className="text-zinc-400">{job.description}</p>
        </div>
      ))}
    </div>
  );
}