import { useRef } from 'react'
import { Bounds, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three'

type Path = {
    path: string
}

const GuitarModel = ({ path }: Path) => {
    const guitarRef = useRef<THREE.Group>(null);
	const { scene } = useGLTF(path);

    useFrame(() => {
        if (guitarRef.current) {
            guitarRef.current.rotation.y += .005;
        }
    })

    return (
        <group ref={guitarRef}>
            <primitive object={scene} />
        </group>
    );
}

const Guitar = ({ path }: Path) => {  

    return (
		<div style={{ height: '80vh'}}>
			<Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }} linear>
				<ambientLight intensity={1} />
				<directionalLight position={[0, 10, 5]} intensity={1} />

				<Bounds fit clip margin={1}>
					<GuitarModel path={path} />
				</Bounds>
			</Canvas>
		</div>
    );
}

export default Guitar;