
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield } from 'lucide-react';

interface RoleProtectedComponentProps {
  allowedRoles: ('admin' | 'moderator' | 'user' | 'enterprise')[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const RoleProtectedComponent: React.FC<RoleProtectedComponentProps> = ({ 
  allowedRoles, 
  children, 
  fallback 
}) => {
  const { userRoles, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
      </div>
    );
  }

  const hasAllowedRole = userRoles.some(role => allowedRoles.includes(role.role));

  if (!hasAllowedRole) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
        <Shield className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <AlertDescription className="text-amber-800 dark:text-amber-400">
          You don't have permission to access this feature. Required roles: {allowedRoles.join(', ')}
        </AlertDescription>
      </Alert>
    );
  }

  return <>{children}</>;
};

export default RoleProtectedComponent;
