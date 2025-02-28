import * as THREE from 'three'
import SpriteText from '../SpriteText'
const dataExamples = [
    {
        name:'星期一',
        value:32,
        type:'人次'
    },
    {
        name:'星期二',
        value:36,
        type:'人次'
    },
    {
        name:'星期三',
        value:30,
        type:'人次'
    },
    {
        name:'星期四',
        value:40,
        type:'人次'
    },
    {
        name:'星期五',
        value:55,
        type:'人次'
    },
    {
        name:'星期六',
        value:86,
        type:'人次'
    },
    {
        name:'星期日',
        value:78,
        type:'人次'

    },
    


]
export default class Polyline3d{
    constructor(data){
        data = data || dataExamples
        this.mesh = new THREE.Group()
        const shape = new THREE.Shape()
        shape.moveTo(0,0)
        data.forEach((item,index) => {
            shape.lineTo(index*1.5,item.value/20)
            //添加字体精灵
            let textPosition = new THREE.Vector3(
                index*1.5,
                item.value/20+0.5,
                0
            )
            let spriteText = new SpriteText(item.value+item.type,textPosition)
            this.mesh.add(spriteText.mesh)
            let textPosition2 = new THREE.Vector3(
                index*1.5,
                0.5,
                1
            )
            let spriteText2 = new SpriteText(item.name,textPosition2)
            this.mesh.add(spriteText2.mesh)
        });
        shape.lineTo((data.length-1)*1.5,0)
        shape.lineTo(0,0)
        const extrudeSettings = {
            steps:1,
            depth:0.2,
            bevelEnabled:false,
            bevelSegements:5
        }
        const material = new THREE.MeshStandardMaterial({
            color:new THREE.Color(Math.random()*0xffffff),
            side:THREE.DoubleSide,
            opacity:0.7,
            transparent:true
        })
        const geometry = new THREE.ExtrudeGeometry(shape,extrudeSettings)
        const polyline = new THREE.Mesh(geometry,material)
        this.mesh.add(polyline)
        this.mesh.position.x = -4
    }
}