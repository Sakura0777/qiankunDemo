import * as THREE from 'three'
import SpriteText from '../SpriteText'
let dataExamples = [
    {
        value:3.5,
        name:'第一季度'
    },
    {
        value:2.7,
        name:'第二季度'
    },
    {
        value:3.2,
        name:'第三季度'
    },
    {
        value:3.9,
        name:'第四季度'
    }
]
export default class Bar3d{
    constructor(data,type='cylinder'){
        data = data || dataExamples
        this.mesh = new THREE.Group()
        data.forEach((item,index) =>{
            let color = new THREE.Color(Math.random()* 0xffffff)
            console.log('color',color)
            let material = new THREE.MeshBasicMaterial({
                color:color,
                transparent:true,
                opacity:0.8
            })
            if(type == 'rect'){
                let boxGeometry = new THREE.BoxGeometry(1,item.value,1)
                let box = new THREE.Mesh(boxGeometry,material)
                box.position.set(-3+index*2,item.value/2,0)
                this.mesh.add(box)
            }else{
                let cylinderGeometry = new THREE.CylinderGeometry(0.5,0.5,item.value)
                let cylinder = new THREE.Mesh(cylinderGeometry,material)
                cylinder.position.set(-3+index*2,item.value/2,0)
                this.mesh.add(cylinder)
            }
            //添加字体精灵
            let textPosition = new THREE.Vector3(-3+index*2,item.value+0.54,0)
            let spriteText = new SpriteText(item.name,textPosition)
            this.mesh.add(spriteText.mesh)
        })

    }
}