import React from 'react';
import "./left-side-bar.scss";

export const LeftSideBar = () => {
    return (
        <>
            <div className='left-side-bar'>
                <a class="btn btn-transparent" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i class="fa fa-solid fa-bars"></i>
                </a>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <img src={require("../../../src/asserts/kyro.PNG")}></img>
                        <button type="button" class="text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa fa-solid fa-bars"></i></button>
                    </div>
                    <div class="offcanvas-body px-5">
                        <div className='home-section'>
                            <i class="fa fa-home fa-2x"></i>
                            <div className='home-section__text'>Home</div>
                        </div>
                        <div className='projects-section'>
                            <i class="	fa fa-eercast fa-2x"></i>
                            <div className='home-section__text'>Projects</div>
                        </div>
                        <div className='dashboard-section'>
                            <i class="fa fa-dashboard fa-2x"></i>
                            <div className='home-section__text'>Dashboard</div>
                        </div>
                        <div className='messages-section'>
                            <i class="fa fa-ioxhost fa-2x"></i>
                            <div className='home-section__text'>Messages</div>
                        </div>
                        <div className='documents-section'>
                            <i class="fa fa-leanpub fa-2x"></i>
                            <div className='home-section__text'>Documents</div>
                        </div>
                        <div className='organizations-section'>
                            <i class="fa fa-joomla fa-2x"></i>
                            <div className='home-section__text'>Organizations</div>
                        </div>
                        <div className='settings-section'>
                            <i class="fa fa-lastfm-square fa-2x"></i>
                            <div className='home-section__text'>Settings</div>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default LeftSideBar;
