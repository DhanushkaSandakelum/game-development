function ambient() {
	const light = new THREE.AmbientLight(0xffffff, 0.1);
	scene.add(light);
}

function directional() {
	// White directional light at half intensity shining from the top.
	const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	directionalLight.castShadow = true; // default false
	directionalLight.position.set(20, 40, 30);
	scene.add(directionalLight);
}

function point() {
	const light = new THREE.PointLight(0xffffff, 1);
	light.position.set(0, 20, 0);
	light.castShadow = true; // default false
	scene.add(light);
}
