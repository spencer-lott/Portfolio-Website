import cn from 'classnames'

export default function Sidebar({toggleMenu}) {

const classes = cn(
  'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating', {'visible' : toggleMenu}
)

  return (
    <div className={classes}>
        <ul>
            <li className='item link'>About Me</li>
            <li className='item link'>Projects</li>
            <li className='item link'>Accomplishments</li>
            <li className='item link'>Interests</li>
            <li className='item link'>Family Life</li>

        </ul>
        
    </div>
  )
}
