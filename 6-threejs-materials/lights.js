function ambient() {
	const light = new THREE.AmbientLight(0xffffff, 0.4);
	scene.add(light);
}

function directional() {
	// White directional light at half intensity shining from the top.
	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
	directionalLight.position.set(20, 30, 30);
	scene.add(directionalLight);
}

function spot() {
	const spotLight = new THREE.SpotLight(0x00ff00, 0.3, 50, Math.PI / 4);
	spotLight.position.set(0, 10, 0);
	spotLight.castShadow = true; // default false
	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 500;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;
	scene.add(spotLight);
}

function point() {
	const light = new THREE.PointLight(0xffffff, 1);
	light.position.set(0, 20, 0);
	light.castShadow = true; // default false
	scene.add(light);
}
