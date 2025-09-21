interface MajorCredits {
  credits: number;
  __brand: "major";
}

interface MinorCredits {
  credits: number;
  __brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "major"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "minor"
  };
}

const major1: MajorCredits = { credits: 10, __brand: "major" };
const major2: MajorCredits = { credits: 15, __brand: "major" };
const minor1: MinorCredits = { credits: 5, __brand: "minor" };
const minor2: MinorCredits = { credits: 8, __brand: "minor" };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
