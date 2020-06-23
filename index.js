void

function main(root = document.body) {
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(root.offsetWidth, root.offsetHeight);
    root.appendChild(renderer.domElement);

    //сцена
    const scene = new THREE.Scene();
    scene.background = new THREE.Color();
    window.scene = scene;

    //камера
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(25, 35, 20);
    const orbit = new THREE.OrbitControls(camera);

    //свет
    scene.add(new THREE.AmbientLight(0xF7F7F7));

    //анимация
    void

    function animate() {
        TWEEN.update();
        orbit.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }();


    //фигуры
    const box = () => {
        scene.add(new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshNormalMaterial()));
    };

    const sphere = () => {
        scene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 10, 10), new THREE.MeshNormalMaterial()));
    };

    const cone = () => {
        scene.add(new THREE.Mesh(new THREE.ConeGeometry(10, 10, 5), new THREE.MeshNormalMaterial()));
        scene.remove
    };

    const cylinder = () => {
        scene.add(new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 10, 20), new THREE.MeshNormalMaterial()));
        scene.remove
    };

    //отрисовка
    const addShapeBox = document.querySelector('.addBox');
    addShapeBox.addEventListener('click', e => {
        scene.remove.apply(scene, scene.children);
        box();
    });

    const addShapeSphere = document.querySelector('.addSphere');
    addShapeSphere.addEventListener('click', e => {
        scene.remove.apply(scene, scene.children);
        sphere();
    });

    const addShapeCone = document.querySelector('.addCone');
    addShapeCone.addEventListener('click', e => {
        scene.remove.apply(scene, scene.children);
        cone();
    });

    const addShapeCylinder = document.querySelector('.addCylinder');
    addShapeCylinder.addEventListener('click', e => {
        scene.remove.apply(scene, scene.children);
        cylinder();
    });


















}();