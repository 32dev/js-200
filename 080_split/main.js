const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`;

capitals.split("\n").forEach(v => {
    const capital = v.split(',')[0];
    const country = v.split(',')[1];
    console.log(`${capital} is in ${country}`);
})