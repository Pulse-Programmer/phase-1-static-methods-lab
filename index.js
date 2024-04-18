class Formatter {
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substring(1);
  }

  static sanitize(name) {
    return name.replace(/[^a-zA-Z0-9-' ]/g, "");
  }

  static titleize(name) {
    const excludeWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = name.split(" ");

    if (words[0] === "a") {
      words[0] = words[0].toUpperCase();
    }

    const titledWords = words.map((word) => {
      if (!excludeWords.includes(word)) {
        word = this.capitalize(word);
        return word;
      } else {
        return word;
      }
    });

    return titledWords.join(" ");
  }
}
