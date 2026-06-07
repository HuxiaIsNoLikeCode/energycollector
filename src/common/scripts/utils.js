export function distance(x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}

export function randomRange(min, max) {
  return Math.random() * (max - min) + min
}

export function randomInt(min, max) {
  return Math.floor(randomRange(min, max + 1))
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

export function lerp(start, end, t) {
  return start + (end - start) * t
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

export function easeOutQuad(t) {
  return t * (2 - t)
}

export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export class ObjectPool {
  constructor(createFn, resetFn, initialSize = 20) {
    this.createFn = createFn
    this.resetFn = resetFn
    this.pool = []
    
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(createFn())
    }
  }

  get() {
    if (this.pool.length > 0) {
      return this.pool.pop()
    }
    return this.createFn()
  }

  release(obj) {
    this.resetFn(obj)
    this.pool.push(obj)
  }

  get size() {
    return this.pool.length
  }
}

export class ParticleSystem {
  constructor(maxParticles = 100) {
    this.particles = []
    this.maxParticles = maxParticles
  }

  emit(x, y, config) {
    if (this.particles.length >= this.maxParticles) {
      return
    }

    const particle = {
      x,
      y,
      vx: config.vx || 0,
      vy: config.vy || 0,
      size: config.size || 5,
      color: config.color || '#00ffff',
      life: config.life || 1,
      maxLife: config.life || 1,
      alpha: 1
    }

    this.particles.push(particle)
  }

  update(dt) {
    this.particles = this.particles.filter(p => {
      p.x += p.vx * dt
      p.y += p.vy * dt
      p.life -= dt
      p.alpha = p.life / p.maxLife
      return p.life > 0
    })
  }

  render(ctx) {
    this.particles.forEach(p => {
      ctx.globalAlpha = p.alpha * 0.8
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2)
      ctx.fill()
    })
    ctx.globalAlpha = 1
  }

  clear() {
    this.particles = []
  }
}
