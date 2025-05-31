
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shield, Mail, Clock, Building, User, Edit2, Save, X } from 'lucide-react';

const UserProfile = () => {
  const { user, profile, userRoles, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    first_name: profile?.first_name || '',
    last_name: profile?.last_name || '',
    company: profile?.company || '',
  });
  
  if (!user || !profile) return null;

  // Get initials for avatar fallback
  const getInitials = (email: string, firstName?: string, lastName?: string) => {
    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`.toUpperCase();
    }
    return email.substring(0, 2).toUpperCase();
  };

  // Format the date for last sign in
  const formatDate = (timestamp: string | null) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString();
  };

  // Get role color
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'enterprise': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'moderator': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const handleSave = async () => {
    try {
      await updateProfile(editForm);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleCancel = () => {
    setEditForm({
      first_name: profile?.first_name || '',
      last_name: profile?.last_name || '',
      company: profile?.company || '',
    });
    setIsEditing(false);
  };

  return (
    <Card className="border-border/40 shadow-md">
      <CardHeader className="pb-4 border-b border-border/30">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">User Profile</CardTitle>
          {!isEditing ? (
            <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
              <Edit2 className="h-4 w-4 mr-2" />
              Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button size="sm" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile.avatar_url || ''} alt={user.email || ''} />
            <AvatarFallback className="text-xl bg-primary/10 text-primary">
              {getInitials(user.email || 'User', profile.first_name || undefined, profile.last_name || undefined)}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-4 flex-1">
            {!isEditing ? (
              <>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Name
                  </p>
                  <p className="font-medium">
                    {profile.first_name || profile.last_name 
                      ? `${profile.first_name || ''} ${profile.last_name || ''}`.trim()
                      : 'Not set'
                    }
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </p>
                  <p className="font-medium">{user.email}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Company
                  </p>
                  <p className="font-medium">{profile.company || 'Not set'}</p>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      value={editForm.first_name}
                      onChange={(e) => setEditForm(prev => ({ ...prev, first_name: e.target.value }))}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      value={editForm.last_name}
                      onChange={(e) => setEditForm(prev => ({ ...prev, last_name: e.target.value }))}
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Company</label>
                  <Input
                    value={editForm.company}
                    onChange={(e) => setEditForm(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Enter company name"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Roles
              </p>
              <div className="flex flex-wrap gap-2">
                {userRoles.length > 0 ? (
                  userRoles.map((role) => (
                    <Badge key={role.id} className={getRoleColor(role.role)}>
                      {role.role}
                    </Badge>
                  ))
                ) : (
                  <Badge className={getRoleColor('user')}>user</Badge>
                )}
              </div>
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
