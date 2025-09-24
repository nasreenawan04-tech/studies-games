
import React, { useState } from 'react';
import { User, Trophy, Target, LogOut, Settings, Star } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Leaderboard from './Leaderboard';

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  if (!user) return null;

  const averageScore = user.gamesPlayed > 0 ? user.totalScore / user.gamesPlayed : 0;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.username}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <div className="p-2">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-center p-2 bg-blue-50 rounded">
                <Trophy className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                <div className="font-semibold text-blue-800">{user.totalScore.toLocaleString()}</div>
                <div className="text-blue-600">Total Score</div>
              </div>
              <div className="text-center p-2 bg-green-50 rounded">
                <Target className="w-4 h-4 mx-auto mb-1 text-green-600" />
                <div className="font-semibold text-green-800">{user.gamesPlayed}</div>
                <div className="text-green-600">Games Played</div>
              </div>
            </div>
            <div className="text-center p-2 bg-purple-50 rounded mt-2">
              <Star className="w-4 h-4 mx-auto mb-1 text-purple-600" />
              <div className="font-semibold text-purple-800">{averageScore.toFixed(0)}</div>
              <div className="text-purple-600">Average Score</div>
            </div>
          </div>
          
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setShowProfile(true)}>
            <Settings className="mr-2 h-4 w-4" />
            <span>View Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span>{user.username}'s Profile</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-blue-800">{user.totalScore.toLocaleString()}</div>
                <div className="text-sm text-blue-600">Total Score</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Target className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold text-green-800">{user.gamesPlayed}</div>
                <div className="text-sm text-green-600">Games Played</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <div className="text-2xl font-bold text-purple-800">{averageScore.toFixed(0)}</div>
                <div className="text-sm text-purple-600">Average Score</div>
              </div>
            </div>
            
            <Leaderboard limit={5} showTitle={false} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfile;
