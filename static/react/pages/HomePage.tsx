import React, { FC } from "react"

type HomePageProps = {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {

    const {} = props

    return (
        <div className="row">
            <div className="col-sm-12">
                HomePage
            </div>
        </div>
    )
}

export default HomePage