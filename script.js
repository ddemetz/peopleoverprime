emails = ["comments@whitehouse.gov", "publicinfo@nlrb.gov"];

subject = "Issue a Bargaining Order Against Amazon";

words_to_replace = {
  significant: [
    "significant",
    "tireless",
    "unrelenting",
    "unwavering",
    "unyielding",
    "uncompromising",
    "unflinching",
    "unshakeable",
    "unshakable",
    "unabated",
    "unrelieved",
    "unmitigated",
    "unqualified",
  ],
  widespread: [
    "widespread",
    "ubiquitous",
    "universal",
    "general",
    "comprehensive",
    "all-encompassing",
    "all-inclusive",
  ],
  Furthermore: ["Furthermore", "Moreover", "Additionally", "In addition"],
  Given: [
    "Given",
    "Considering",
    "In light of",
    "Taking into account",
    "In view of",
    "In consideration of",
  ],
  "Thank you": [
    "Thank you",
    "Thank you for your attention",
    "Thank you for your time",
    "Thank you for your consideration",
    "Thank you for your prompt attention",
    "Thank you for your prompt consideration",
    "Thank you for your prompt response",
    "Thank you for your prompt reply",
    "Thank you for your prompt reply",
    "Thank you for your prompt feedback",
    "Thank you for your prompt reply",
    "Thank you for your prompt feedback",
    "Thank you for your prompt response",
    "Thank you for your prompt attention",
    "Thank you for your prompt consideration",
    "Thank you for your time",
    "Thank you for your attention",
  ],
  urge: ["urge", "call upon", "plead with", "implore", "beseech"],
  "long-term": [
    "long-term",
    "enduring",
    "lasting",
    "permanent",
    "prolonged",
    "extended",
    "sustained",
    "continuing",
  ],
  severity: [
    "severity",
    "seriousness",
    "gravity",
    "urgency",
    "extremity",
    "criticality",
    "acuteness",
    "intensity",
    "importance",
  ],
  "unfair labor practices": [
    "unfair labor practices",
    "unjust labor practices",
    "discriminatory labor practices",
    "unethical labor practices",
    "illegal labor practices",
    "unlawful labor practices",
    "unjust labor practices",
  ],
  "free and fair election process": [
    "free and fair election process",
    "democratic election process",
    "fair election process",
    "transparent election process",
    "equitable election process",
    "just election process",
    "impartial election process",
    "unbiased election process",
  ],
  "unlawful disciplinary actions": [
    "unlawful disciplinary actions",
    "illegal disciplinary actions",
    "unjust disciplinary actions",
    "unethical disciplinary actions",
    "discriminatory disciplinary actions",
    "unjustified disciplinary actions",
    "unwarranted disciplinary actions",
    "unreasonable disciplinary actions",
  ],
  "unlawful terminations": [
    "unlawful terminations",
    "illegal terminations",
    "unjust terminations",
    "unethical terminations",
    "discriminatory terminations",
    "unjustified terminations",
    "unwarranted terminations",
    "unreasonable terminations",
  ],
  "atmosphere of intimidation": [
    "atmosphere of intimidation",
    "climate of fear",
    "culture of intimidation",
    "environment of fear",
    "climate of intimidation",
    "culture of fear",
    "environment of intimidation",
  ],
};

emailCopy = `

Dear ____,
%0D%0A
%0D%0A
We write to urge you to issue a bargaining order against Amazon. Amazon has engaged in a pattern of egregious labor violations that have undermined the free and fair election process, echoing the unfair labor practices that the NLRB has previously ruled against at this facility.
%0D%0A
%0D%0A
In 2021, the NLRB found that Amazon illegally fired and disciplined workers involved in unionizing efforts at JFK8. This behavior has continued, with the company retaliating against pro-union employees through unlawful disciplinary actions and terminations.
%0D%0A
%0D%0A
Amazon has also engaged in widespread surveillance of workers' union activities, a violation the NLRB has previously cited at JFK8. The company has closely monitored employee discussions, meetings, and organizing efforts, creating an atmosphere of intimidation and fear.
%0D%0A
%0D%0A
Furthermore, Amazon has repeatedly disseminated anti-union propaganda, a practice the NLRB has deemed coercive and unlawful at this facility. The company has flooded employees with captive audience meetings, mandatory anti-union videos, and biased communications that misrepresent the consequences of unionization.
%0D%0A
%0D%0A
The NLRB has made significant efforts to rein in Amazon's unfair labor practices at JFK8, issuing complaints and seeking remedies. However, the company's flagrant disregard for labor laws has persisted, necessitating stronger action to protect workers' rights.
%0D%0A
%0D%0A
The severity and pattern of labor violations is clear. Additionally, the NLRB has pledged to issue bargaining orders to companies violating labor law. For these reasons, we strongly urge the NLRB to fulfill its pledge and issue a bargaining order to bring Amazon to the table. We cannot allow Amazon to bully its way into appeals and long-term court battles. Put an end to the suffering Amazon workers have endured by ending the charades Amazon has played for years.
%0D%0A
%0D%0A
%0D%0A
Thank you,
`;

const generateEmail = (name) => {
  // create mailto link with subject and body

  //   select random email from list

  const randomEmail = emails[Math.floor(Math.random() * emails.length)];

  for (const [key, value] of Object.entries(words_to_replace)) {
    const randomWord = value[Math.floor(Math.random() * value.length)];
    emailCopy = emailCopy.replace(key, randomWord);
  }

  if (randomEmail == emails[0]) {
    emailCopy = emailCopy.replace("____", "White House Administration");
  } else {
    emailCopy = emailCopy.replace("____", "NLRB Board Members");
  }

  const mailtoLink = `mailto:${randomEmail}?subject=${subject}&body=${emailCopy}`;

  //   replace \n with %0D%0A for line breaks
  mailtoLink.replace("\n", "%0D%0A");

  return mailtoLink;
};

// Get a element from the DOM
document.getElementById("clickMe").addEventListener("click", function () {
  console.log("Button was clicked");
  window.location.href = generateEmail("Name");
});