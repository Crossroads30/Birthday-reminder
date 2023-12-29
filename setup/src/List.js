import React from 'react'
import { data } from './data'

const List = () => {
	return (
		<>
			<ul>
				{data.map(person => {
					const { id, name, age, image } = person
					return (
						<li key={id} className='person'>
							<img src={image} alt='' />
							<div>
								<h4>{name}</h4>
								<p>{age} years</p>
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default List
