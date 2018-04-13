// Copyright (C) 2018 Cristobal Valenzuela
// 
// This file is part of RunwayML.
// 
// RunwayML is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// RunwayML is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with RunwayML.  If not, see <http://www.gnu.org/licenses/>.
// 

import React from 'react'
import Link from 'gatsby-link'

import './styles/footer.css';

const Footer = ({ siteTitle }) => (
  <div className="Footer" id="contact">
    <h6>hello@runwayml.com</h6>
    <h6>
      <a href="https://github.com/runwayml">
        <img src="/static/img/logos/github.svg" alt="github" />
      </a>
    </h6>
  </div>
);

export default Footer