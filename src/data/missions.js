const missions = {
    1: {
      stats: { patience: 0, credibility: 0, strength: 0 },
      action:
        "Your phone buzzes and you sigh. Another mission from the Vatican. At least this one is local.",
      optionA: { text: "Head out right away to get this over with.", storyID: 2 },
      optionB: { text: "Make a cup of coffee and eat breakfast first.", storyID: 3 }
    },
    2: {
      stats: { patience: -5, credibility: 0, strength: 0 },
      action: "When you arrive, you find the afflicted family in chaos.",
      optionA: { text: "Some option", storyID: 4 },
      optionB: { text: "Another option", storyID: 5 }
    },
    3: {
      stats: { patience: 15, credibility: -10, strength: 0 },
      action:
        "With a full stomach and caffeine on your side, you make your way to the afflicted family's home.\nWhen you arrive, you find the household in chaos.",
      optionA: { text: "SOME ACTION.", storyID: 6 },
      optionB: { text: "A DIFFERENT ACTION.", storyID: 7 }
    },
    4: {
      stats: { patience: 5, credibility: 0, strength: 0 },
      action:
        "With a full stomach and caffeine on your side, you make your way to the afflicted family's home.\nWhen you arrive, you find the household in chaos.",
      optionA: { text: "SOME ACTION.", storyID: 6 },
      optionB: { text: "A DIFFERENT ACTION.", storyID: 7 }
    },
    5: {
      stats: { patience: 5, credibility: 0, strength: 0 },
      action:
        "With a full stomach and caffeine on your side, you make your way to the afflicted family's home.\nWhen you arrive, you find the household in chaos.",
      optionA: { text: "SOME ACTION.", storyID: 6 },
      optionB: { text: "A DIFFERENT ACTION.", storyID: 7 }
    },
};

export default missions;
