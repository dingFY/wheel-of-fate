function filterTemplates(templates, category = "", keyword = "") {
  const normalizedKeyword = String(keyword).trim().toLowerCase();
  return templates.filter(item => {
    const matchesCategory = !category || item.category === category;
    const searchable = `${item.name} ${item.desc}`.toLowerCase();
    return matchesCategory && (!normalizedKeyword || searchable.includes(normalizedKeyword));
  });
}

function sortTemplates(templates, sort = "hot") {
  const result = templates.slice();
  if (sort === "latest") return result.sort((a, b) => b.createdAt - a.createdAt);
  if (sort === "all") return result;
  return result.sort((a, b) => b.heat - a.heat);
}

module.exports = { filterTemplates, sortTemplates };
