function twiceAsOld(dadYearsOld, sonYearsOld) {
    let i = 0;
    if (2  * sonYearsOld >= dadYearsOld) {
      while (2  * sonYearsOld != dadYearsOld) {
        sonYearsOld--;
        dadYearsOld--;
        i++;
      }
      return i
    } else {
      while (2  * sonYearsOld != dadYearsOld) {
        sonYearsOld++;
        dadYearsOld++;
        i++;
    }
      return i;
  }
}