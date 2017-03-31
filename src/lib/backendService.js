const baseUrl = "http://localhost:3000"

export const getNearbyStops = (lat, lon, dt) => {
  console.log("I got called");
  return fetch(`${baseUrl}/getNearbyStops?lat=${lat}&lon=${lon}&dt=${dt}`).then(res => res.json()).catch(err => console.log(err));
}

export const getDeparturesForStop = (name) => {
  return fetch(`${baseUrl}/getDeparturesForStop/${name}`).then(res => res.json());
}
