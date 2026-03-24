export const getInstalledApps = () => {
  const apps = localStorage.getItem("installedApps");
  if (apps) {
    return JSON.parse(apps);
  }
  return [];
};

export const saveApp = (id) => {
  let apps = getInstalledApps();
  const exists = apps.find((appId) => appId === id);
  if (!exists) {
    apps.push(id);
    localStorage.setItem("installedApps", JSON.stringify(apps));
    return true;
  }
  return false;
};

export const removeApp = (id) => {
  let apps = getInstalledApps();
  const filteredApps = apps.filter((appId) => appId !== id);
  localStorage.setItem("installedApps", JSON.stringify(filteredApps));
};
