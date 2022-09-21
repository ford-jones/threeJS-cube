import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'

const container = document.querySelector('#scene-container')
const scene = new Scene()
scene.background = new Color('beige')
const camera = new PerspectiveCamera(
  75,
  window.innerHeight / window.innerHeight,
  0.5,
  1000
)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 10

const renderer = new WebGLRenderer()
renderer.setSize(container.clientWidth, container.clientHeight)
renderer.setPixelRatio(window.devicePixelRatio)
container.appendChild(renderer.domElement)

const geometry = new BoxBufferGeometry(1, 1, 1)
const material = new MeshBasicMaterial()

const cube = new Mesh(geometry, material)
scene.add(cube)

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.renderer(scene, camera)
}
animate()
