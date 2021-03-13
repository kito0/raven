import React from 'react';
import '../../css/Sidebar.css';
import { Twitter } from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<Twitter />
			<SidebarOption text="Home" />
			<SidebarOption text="Explore" />
			<SidebarOption text="Notifications" />
			<SidebarOption />
		</div>
	);
}
