import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from '../../login/login.component';
import { PromedioComponent } from '../../promedio/promedio.component';
import { CreateComponent } from '../../create/create.component';
import { RegisterComponent } from '../../register/register.component';
import { ProfileComponent } from '../../profile/profile.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'promedio',     component: PromedioComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'create',          component: CreateComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'Register',  component:RegisterComponent  },
    { path: 'profile',  component:ProfileComponent  },
    { path: 'upgrade',        component: UpgradeComponent },


];
