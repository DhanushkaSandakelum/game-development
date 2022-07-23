function ambient() {
	const light = new THREE.AmbientLight(0xffffff, 1.0);
	scene.add(light);
}

function directional() {
	// White directional light at half intensity shining from the top.
	const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	directionalLight.position.set(20, 30, 30);
	scene.add(directionalLight);
}

function spot() {
	const light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(10, 10, 10);
	light.castShadow = true; // default false
	scene.add(light);
}

function point() {
	const light = new THREE.PointLight(0xff0000, 1, 100);
	light.position.set(0, 20, 0);
	scene.add(light);
}
