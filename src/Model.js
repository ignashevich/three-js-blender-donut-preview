/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef, useState} from 'react'
import {useGLTF} from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from 'three/src/loaders/TextureLoader'

export default function Model({...props}) {
    const group = useRef()
    const [coords, setCoords] = useState({x: 0, y:0});
    useEffect(() => {
        window.addEventListener("mousemove", (mouseEvent) => {
            setCoords({x: mouseEvent.clientX, y: mouseEvent.clientY});
        });
    }, []);
    const yRot = (((coords.y * 100 / window.innerHeight) * (2*Math.PI))/100) + Math.PI;
    const xRot = (((coords.x * 100 / window.innerWidth) * (2*Math.PI))/100) + Math.PI;
    const {nodes, materials} = useGLTF('/donut6.glb')
    const normalMap = useLoader(TextureLoader, '/Donut base normal.png')

    const donutBaseMaterial = materials['Material.001'];
    donutBaseMaterial.normalMap = normalMap;
    return (
        <group rotation={[yRot, xRot, 0]} ref={group} {...props} dispose={null}>
            <mesh scale={50} geometry={nodes.Donut.geometry} material={donutBaseMaterial} position={[0, 0.02, 0]}/>
            <group position={[0, 0.02, 0]}>
                <mesh scale={50} geometry={nodes.Torus002.geometry} material={materials.Material}/>
                <mesh scale={50} geometry={nodes.Torus002_1.geometry} material={materials.Sprinkles}/>
            </group>
        </group>
    )
}

useGLTF.preload('/donut6.glb')
