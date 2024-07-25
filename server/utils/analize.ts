import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
export interface checks {
  wordCount: boolean;
  vocabulary: number;
  readingLevel: number;
  personalPronouns: boolean;
  numericizedData: boolean;
  measurableAchievements: boolean;
  atsCompliant: boolean;
  correctlyFormatedDates: boolean;
  grammarErrors: boolean;
  sections: {
    softSkills: boolean;
    hardSkills: boolean;
    linkedInUrl: boolean;
    email: boolean;
    education: boolean;
    name: boolean;
  };
}
const checks =
  "interface checks { wordCount: boolean; vocabulary: number; readingLevel: number; personalPronouns: boolean; numericizedData: boolean; measurableAchievements: boolean; atsCompliant: boolean; correctlyFormatedDates: boolean; grammarErrors: boolean; sections: { softSkills: boolean; hardSkills: boolean; linkedInUrl: boolean; email: boolean; education: boolean; name: boolean; }; }";
const context =
  "You're an ATS, the following text corresponds a cv that scores 100/100, check for grammatical errors, correct resume etiquette and other mistakes, the cv is a text and may not be correctly formatted due to the nature of extracting text from pdf, so try to ignore errors on spacing or formatting";
const correctExample =
  "Diamond Dinh  jobs@libdb.so |  diamondburned |  https://libdb.so |  Diamond Dinh EDUCATION California State University, Fullerton Fullerton, CA Bachelor of Science in Computer Science May 2024 WORK EXPERIENCE Google Sunnyvale, CA Software Engineer Intern May 2023 ‐ August 2023 • Developed a high‐performance, parallel, and distributed pipeline using Go and Apache Beam to reconcile massive internal log databases with Certificate Transparency logs. • Improved the security of the certificate issuance pipeline by ensuring the authenticity of certificates issued by Google and preventing missing entries in Certificate Transparency logs. • Achieved exceptional efficiency, with the pipeline processing millions of log entries in under a minute and running at regular intervals for ongoing security assurance. Google Seattle, WA STEP Intern May 2022 ‐ August 2022 • Rewrote and modernized a Kubernetes node monitoring tool in Go and integrated it with internal infrastructure and telemetry collector for real‐time tracking and performance analysis. • Led the redesign and development, collaborating with the original team to ensure objectives were met. • Achieved more reliable system monitoring with better error handling, consistent status reporting to multiple outputs, and valuable telemetry for internal dashboards, reducing on‐call resolution time. ShiHoYa Inc. Remote Backend Developer Feb 2019 ‐ Sep 2020 • Restructured and refactored Go codebase for improved maintainability and adherence to style guides. • Designed and implemented an automatic CI/CD pipeline for deploying latest releases to AWS EC2 instances using Nix, enhancing development speed and enabling rapid testing by other teams. LEADERSHIP Association for Computing Machinery at CSUF | Dev Team Lead August 2023 ‐ Present Intercollegiate Programming Competition (ICPC) | Team Lead October 2023 PROJECTS Dissent | Go, C, GTK4 diamondburned/dissent  Native Discord chat client app featured by GNOME with 1,000+ stars on GitHub. acm‐aws | Terraform, NixOS, Libvirt, QEMU, GitHub Actions, CI/CD acmcsufoss/acm‐aws  Infrastructure‐as‐code for ACM at CSUF with CI/CD pipelines for AWS and bare‐metal. Layover Party | Python, FastAPI, OpenAPI, Flutter layover.party  Full‐stack web/mobile application to match people with long layover flights, won LAHacks 2023. SKILLS Languages: Go, Bash, JavaScript, TypeScript, Nix, C, C++, Python, Deno, SQL, HTML, CSS, Svelte, Protobuf Databases: PostgreSQL, SQLite, MariaDB, BadgerDB, Redis, InfluxDB Cloud/Infra: Terraform, AWS, GitHub Actions, GitLab CI, Prometheus, Grafana, Apache Beam, Telegraf";
const thingsToCheck =
  "Check for contact information (Linkedin,Email,Github,Phone Number), Name, Location, Skills, Experience, Education, Projects, the sections must follow the STAR format, for each missing part substract points from the final score, analize the reading complexity, vocabulary used, frequency of words (too much frequency of the same words substracts points), excesive use of connectors (Basically search for unnecesary fluff/padding to make the resume longer), measurableAchievements must have at least 5, soft and hard skills at leat 5 each";
const howToRespond =
  "You will return a valid json object, nothing else, just the json object as is do not add extra backticks, or json word at the start, without fluff,stick to this interface: Interface response {totalScore:number;message:string} detail in the message property where should the user fix things and some recommendations.";
export async function analizeCV(cv: string) {
  const apiKey = useRuntimeConfig().openaiApiKey;
  const openai = createOpenAI({
    apiKey,
  });
  const prompt = `${context}\n${correctExample}\n${thingsToCheck}\n Here is an interface for things to check ${checks} \n Now here is the one you will check:\n${cv} \n ${howToRespond}`;
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: prompt,
  });
  console.log(text);
  return text;
}
