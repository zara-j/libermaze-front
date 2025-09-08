import { ProfileItem } from '@/types/navbar.model';
import { UserPen,Settings, LogOut } from 'lucide-react';


export const ProfileItems: ProfileItem[] = [
    {title: "Profile", address: "profile", icon: <UserPen size={20} />},
    {title: "Setting", address: "setting", icon: <Settings size={20} />},
    {title: "Sign out", address: "auth?mode=logout", icon: <LogOut size={20} />},
]
