import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import Axis3d from '../three/charts3d/Axis3d';
import Bar3d from '../three/charts3d/Bar3d';
import Pie3d from '../three/charts3d/Pie3d';
import Polyline3d from './charts3d/Polyline3d';
export default class ThreePlus {
    constructor(selector) {
        this.donElement = document.querySelector(selector);
        this.width = this.donElement.clientWidth;
        this.height = this.donElement.clientHeight;
        this.updateMeshArr = [];
        this.init();
        // threePlus.control.target.set(2,2,2);
        let axix3d = new Axis3d(new THREE.Vector3(10, 8, 5))
        this.scene.add(axix3d.mesh)
        // let bar3d = new Bar3d(null,'rect')
        // this.scene.add(bar3d.mesh)
        // let pie3d = new Pie3d(null, this.camera)
        // this.scene.add(pie3d.mesh)
        // this.updateMeshArr.push(pie3d);
        let polyline3d = new Polyline3d()
        this.scene.add(polyline3d.mesh)
    }
    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x333333);
        this.camera = new THREE.PerspectiveCamera(
            45,
            this.width / this.height,
            0.1,
            10000
        );
        this.camera.position.set(0, 2, 12);
        this.camera.updateProjectionMatrix();
        this.renderer = new THREE.WebGLRenderer({
            logarithmicDepthBuffer: true,
            antialias: true
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.donElement.appendChild(this.renderer.domElement);
        this.control = new OrbitControls(this.camera, this.renderer.domElement);
        this.control.enableDamping = false;
        const axesHelper = new THREE.AxesHelper(5)
        this.scene.add(axesHelper)
        const light = new THREE.AmbientLight(0xeeeeee); // soft white light
        this.scene.add(light);
        this.animate();
        this.windowResize();
    }
    animate() {
        this.control && this.control.update();
        if (this.updateMeshArr.length > 0) {
            for (let i = 0; i < this.updateMeshArr.length; i++) {
                // console.log('66666666666')
              this.updateMeshArr[i].update();
            }
          }
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
    windowResize() {
        window.addEventListener('resize', () => {
            // 更新摄像头
            this.camera.aspect = window.innerWidth / window.innerHeight;
            //   更新摄像机的投影矩阵
            this.camera.updateProjectionMatrix();
            //更新渲染器
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            //更新渲染器的像素比例
            this.renderer.setPixelRatio(window.devicePixelRatio);
        })
    }
}