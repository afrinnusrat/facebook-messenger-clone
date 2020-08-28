import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function Message(props) {
    return (
        <Card>
            <CardContent>
                <Typography
                    color="white"
                    variant="h5"
                    component="h5"
                >
                    {props.username}: {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Message
