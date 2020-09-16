import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            'section':[
                {
                    'title':'Hats',
                    'imageUrl':'https://picsum.photos/id/237/200/300',
                    'id':1,
                    'url':'hats'

                },
                {
                    'title':'Jackets',
                    'imageUrl':'https://picsum.photos/seed/picsum/200/300',
                    'id':2,
                    'url':'jackets'

                },
                {
                    'title':'Sneakers',
                    'imageUrl':'https://picsum.photos/200/300?grayscale',
                    'id':3,
                    'url':'sneakers'

                },
                {
                    'title':'Womens',
                    'imageUrl':'https://picsum.photos/200/300/?blur',
                    'size':'large',
                    'id':4,
                    'url':'wemens'

                },
                {
                    'title':'Mens',
                    'imageUrl':'https://picsum.photos/200/300/?blur=2',
                    'size':'large',
                    'id':5,
                    'url':'mens'

                },
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({title,imageUrl,id,size,url})=>(
                        <MenuItem key={id} title={title} url={url} imageUrl={imageUrl} size={size} history={this.props.history}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;