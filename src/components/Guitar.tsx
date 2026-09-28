import { Bounds, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'

type Path = {
    path: string
}

const GuitarModel = ({ path }: Path) => {
	const { scene } = useGLTF(path);
    return <primitive object={scene} />;
}

const Guitar = ({ path }: Path) => {
    return (
		<div style={{ height: "100vh" }}>
			<Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }} linear>
				<ambientLight intensity={1} />
				<directionalLight position={[0, 10, 5]} intensity={1} />

				<Bounds fit clip margin={1.2}>
					<GuitarModel path={path} />
				</Bounds>
			</Canvas>
		</div>
    );
}

export default Guitar;