const missions = {
    0: {
      stats: { patience: 0, credibility: 0, strength: 0 },
      action: "Looks like you ran into a part of the story that's still under construction!",
      optionA: { text: "Sorry!", storyID: 1 },
      optionB: { text: "Start over!", storyID: 1}
    },
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
      optionA: { text: "SOME ACTION.", storyID: 0 },
      optionB: { text: "A DIFFERENT ACTION.", storyID: 0 }
    },
    4: {
      stats: { patience: 5, credibility: 0, strength: 0 },
      action:
        "With a full stomach and caffeine on your side, you make your way to the afflicted family's home.\nWhen you arrive, you find the household in chaos.",
      optionA: { text: "SOME ACTION.", storyID: 0 },
      optionB: { text: "A DIFFERENT ACTION.", storyID: 0 }
    },
    5: {
      stats: { patience: 5, credibility: 0, strength: 0 },
      action:
        "With a full stomach and caffeine on your side, you make your way to the afflicted family's home.\nWhen you arrive, you find the household in chaos.",
      optionA: { text: "SOME ACTION.", storyID: 0 },
      optionB: { text: "A DIFFERENT ACTION.", storyID: 0 }
    },
};

export default missions;
