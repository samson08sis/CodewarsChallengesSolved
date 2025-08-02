function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds % 3600) / 60);
  let ss = Math.floor(((seconds % 3600) % 60) % 60);
  console.log(
    `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(
      ss
    ).padStart(2, "0")}`
  );
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(
    2,
    "0"
  )}:${String(ss).padStart(2, "0")}`;
}

humanReadable(59);
