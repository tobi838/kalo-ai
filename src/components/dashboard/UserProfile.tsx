
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Mail, Clock } from 'lucide-react';

const UserProfile = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  // Get initials for avatar fallback
  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  // Format the date for last sign in
  const formatDate = (timestamp: string | null) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString();
  };

  return (
    <Card className="border-border/40 shadow-md">
      <CardHeader className="pb-4 border-b border-border/30">
        <CardTitle className="text-xl font-semibold">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
            <AvatarFallback className="text-xl bg-primary/10 text-primary">
              {getInitials(user.email || 'User')}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </p>
              <p className="font-medium">{user.email}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Account ID
              </p>
              <p className="font-medium text-sm">{user.id}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Last Sign In
              </p>
              <p className="font-medium text-sm">{formatDate(user.last_sign_in_at)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
